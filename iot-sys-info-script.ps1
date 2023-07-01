# Function to send HTTP POST request
function Send-HttpPostRequest {
    param(
        [string]$Url,
        [string]$Body
    )

    $request = [System.Net.WebRequest]::Create($Url)
    $request.Method = "POST"
    $request.ContentType = "application/json"

    $byteArray = [System.Text.Encoding]::UTF8.GetBytes($Body)
    $request.ContentLength = $byteArray.Length

    $requestStream = $request.GetRequestStream()
    $requestStream.Write($byteArray, 0, $byteArray.Length)
    $requestStream.Close()

    $response = $request.GetResponse()
    $response.Close()
}

$i = 0;
while ($true) {

    $i++;

    # get the cpu usage
    $cpuUsage = Get-WmiObject -Class Win32_PerfFormattedData_PerfOS_Processor | Select-Object -ExpandProperty PercentProcessorTime
    $averageCpuUsage = ($cpuUsage | Measure-Object -Average).Average

    # get date time in milliseconds
    $unixEpoch = [System.DateTime]::new(1970, 1, 1, 0, 0, 0, [System.DateTimeKind]::Utc)
    $currentDate = [System.DateTime]::UtcNow
    $millisecondsSinceEpoch = ($currentDate - $unixEpoch).TotalMilliseconds
    $millisecondsSinceEpoch = [Math]::Round($millisecondsSinceEpoch, 0)

    # Get memory usage
    $counterPath = "\Memory\% Committed Bytes In Use"
    $memoryUsed = (Get-Counter -Counter $counterPath).CounterSamples[0].CookedValue
    $memoryUsed = [Math]::Round($memoryUsed, 1)

    # Get System OS Information
    $osInfo = Get-WmiObject -Class Win32_OperatingSystem | Select-Object Caption

    # get os name 
    $osName = $osInfo.Caption

    # Get Processor Details
    $processorInfo = Get-WmiObject -Class Win32_Processor | Select-Object Name, MaxClockSpeed

    # S

    # combining the data and sending the response
    $endpointUrl = "http://localhost:8080/iot/data"  # Replace with your actual endpoint URL
    $data = @{
        "systemId" = 1
        "datetime" = $millisecondsSinceEpoch
        "os" = $osName
        "processorName" = $processorInfo.Name
        "processorSpeed" = $processorInfo.MaxClockSpeed
        "cpuUsage" = $averageCpuUsage
        "memoryUsed" = $memoryUsed
    } | ConvertTo-Json

    Send-HttpPostRequest -Url $endpointUrl -Body $data

    Write-Host "Message sent $i times"

    Start-Sleep -Seconds 2
}