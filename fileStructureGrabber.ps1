function Get-DirectoryTree {
    param(
        [string]$Path,
        [int]$MaxDepth,
        [int]$CurrentDepth = 0
    )

    $item = Get-Item -LiteralPath $Path
    $node = @{
        Name = $item.Name
        Path = $item.FullName
        Type = if ($item.PSIsContainer) { "Directory" } else { "File" }
    }

    if ($item.PSIsContainer -and $CurrentDepth -lt $MaxDepth) {
        $children = Get-ChildItem -LiteralPath $Path -Force | ForEach-Object {
            Get-DirectoryTree -Path $_.FullName -MaxDepth $MaxDepth -CurrentDepth ($CurrentDepth + 1)
        }
        $node.Children = $children
    }

    return $node
}

# Set your project directory and desired depth (adjust MaxDepth as needed)
$projectPath = "C:\Users\kaide\Desktop\AI Projects\Claude 3.5 Sonnet\silentbridge"
$maxDepth = 2

# Generate the directory tree structure
$tree = Get-DirectoryTree -Path $projectPath -MaxDepth $maxDepth

# Export to JSON (the -Depth parameter here may need to be increased if your structure is deeper)
$tree | ConvertTo-Json -Depth 10 | Out-File "structure.json"

Write-Host "Export complete! Check the structure.json file in your current directory."
