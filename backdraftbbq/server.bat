@echo off
if not exist tools\swagger-codegen-cli.jar powershell -ExecutionPolicy ByPass -File .\tools\download-tools.ps1
@echo on

java -jar tools/swagger-codegen-cli.jar generate -i api/openapi.yaml -l nodejs-server -o server
