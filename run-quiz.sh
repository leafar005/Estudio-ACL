#!/bin/bash
cd "$(dirname "$0")"

# Execute the AppImage without requiring libfuse2
./dist/"Portal de Encuestas ACL-1.0.0.AppImage" --appimage-extract-and-run
