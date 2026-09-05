$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Runtime.WindowsRuntime

function Await-WinRT($operation, [Type]$resultType) {
  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() |
    Where-Object {
      $_.Name -eq "AsTask" -and
      $_.IsGenericMethod -and
      $_.GetParameters().Count -eq 1 -and
      $_.GetParameters()[0].ParameterType.Name -eq "IAsyncOperation``1"
    } |
    Select-Object -First 1
  $task = $method.MakeGenericMethod($resultType).Invoke($null, @($operation))
  $task.GetAwaiter().GetResult()
}

$managerType = [Windows.Media.Control.GlobalSystemMediaTransportControlsSessionManager, Windows.Media.Control, ContentType = WindowsRuntime]
$propertiesType = [Windows.Media.Control.GlobalSystemMediaTransportControlsSessionMediaProperties, Windows.Media.Control, ContentType = WindowsRuntime]
$manager = Await-WinRT ($managerType::RequestAsync()) $managerType
$session = $manager.GetCurrentSession()

if ($null -eq $session) {
  @{ available = $false } | ConvertTo-Json -Compress
  exit 0
}

$properties = Await-WinRT ($session.TryGetMediaPropertiesAsync()) $propertiesType
$timeline = $session.GetTimelineProperties()
$playback = $session.GetPlaybackInfo()
$status = [string]$playback.PlaybackStatus
$thumbnailBase64 = ""

if ($null -ne $properties.Thumbnail) {
  try {
    $streamType = [Windows.Storage.Streams.IRandomAccessStreamWithContentType, Windows.Storage.Streams, ContentType = WindowsRuntime]
    $sourceStream = Await-WinRT ($properties.Thumbnail.OpenReadAsync()) $streamType
    $asStreamMethod = [System.IO.WindowsRuntimeStreamExtensions].GetMethods() |
      Where-Object { $_.Name -eq "AsStreamForRead" -and $_.GetParameters().Count -eq 1 } |
      Select-Object -First 1
    $netStream = $asStreamMethod.Invoke($null, @($sourceStream))
    $memory = New-Object System.IO.MemoryStream
    $netStream.CopyTo($memory)
    $thumbnailBase64 = [Convert]::ToBase64String($memory.ToArray())
    $netStream.Dispose()
    $memory.Dispose()
  } catch {
    $thumbnailBase64 = ""
  }
}
@{
  available = $true
  title = [string]$properties.Title
  artist = [string]$properties.Artist
  album = [string]$properties.AlbumTitle
  source = [string]$session.SourceAppUserModelId
  isPlaying = $status -eq "Playing"
  progressMs = [Math]::Max(0, [Math]::Round($timeline.Position.TotalMilliseconds))
  durationMs = [Math]::Max(0, [Math]::Round(($timeline.EndTime - $timeline.StartTime).TotalMilliseconds))
  thumbnailBase64 = $thumbnailBase64
} | ConvertTo-Json -Compress
