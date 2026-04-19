# PowerShell script to fix Layout.astro
# 1. Remove the import for PUBLIC_GOOGLE_SITE_VERIFICATION from astro:env/client
# 2. Add const declaration after all imports

$filePath = "src\layouts\Layout.astro"
$content = Get-Content -Path $filePath -Raw

# Remove the import line for PUBLIC_GOOGLE_SITE_VERIFICATION
$pattern1 = 'import \{ PUBLIC_GOOGLE_SITE_VERIFICATION \} from "astro:env/client";\r?\n'
$content = $content -replace $pattern1, ""

# Add const declaration after the last import (after global.css import)
$pattern2 = '(import "@/styles/global.css";)\r?\n'
$replacement = '${1}`r`n`r`nconst PUBLIC_GOOGLE_SITE_VERIFICATION = import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION;'
$content = $content -replace $pattern2, $replacement

Set-Content -Path $filePath -Value $content -NoNewline

Write-Host "Fixed src/layouts/Layout.astro" -ForegroundColor Green
Write-Host "  - Removed import from astro:env/client"
Write-Host "  - Added const declaration after all imports"
