# Word 문서(.docx) 읽기 가이드

Windows 환경에서 Claude Code가 .docx 파일을 읽는 방법입니다.

## 배경

- `.docx` 파일은 실제로 ZIP 압축 파일
- 내부에 `word/document.xml`이 본문 텍스트를 담고 있음
- Claude의 Read 도구는 바이너리 파일을 직접 읽을 수 없음

## 방법: PowerShell을 이용한 텍스트 추출

### Step 1: 파일을 ZIP으로 복사

```powershell
powershell -Command "Copy-Item '원본파일.docx' 'C:\Users\buff4\AppData\Local\Temp\temp_doc.zip'"
```

### Step 2: ZIP 압축 해제

```powershell
powershell -Command "Expand-Archive -Path 'C:\Users\buff4\AppData\Local\Temp\temp_doc.zip' -DestinationPath 'C:\Users\buff4\AppData\Local\Temp\doc_extracted' -Force"
```

### Step 3: 텍스트 추출 스크립트 생성

```powershell
# extract_text.ps1 파일 내용
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$content = Get-Content "C:\Users\buff4\AppData\Local\Temp\doc_extracted\word\document.xml" -Raw -Encoding UTF8
$matches = [regex]::Matches($content, '<w:t[^>]*>([^<]*)</w:t>')
$text = ""
foreach ($match in $matches) {
    $text += $match.Groups[1].Value
}
$text | Out-File -FilePath "C:\Users\buff4\AppData\Local\Temp\extracted_text.txt" -Encoding UTF8
Write-Output "Saved to extracted_text.txt"
```

### Step 4: 스크립트 실행

```powershell
powershell -ExecutionPolicy Bypass -File "C:\Users\buff4\AppData\Local\Temp\extract_text.ps1"
```

### Step 5: 추출된 텍스트 읽기

Claude의 Read 도구로 `C:\Users\buff4\AppData\Local\Temp\extracted_text.txt` 읽기

## 전체 프로세스 (복사용)

```bash
# 1. 파일 복사 (한글 파일명 문제 회피)
powershell -Command "Copy-Item '원본경로\파일명.docx' 'C:\Users\buff4\AppData\Local\Temp\temp_doc.docx'"

# 2. ZIP으로 복사 및 압축 해제
powershell -Command "Copy-Item 'C:\Users\buff4\AppData\Local\Temp\temp_doc.docx' 'C:\Users\buff4\AppData\Local\Temp\temp_doc.zip'; Expand-Archive -Path 'C:\Users\buff4\AppData\Local\Temp\temp_doc.zip' -DestinationPath 'C:\Users\buff4\AppData\Local\Temp\doc_extracted' -Force"
```

그 다음 Write 도구로 스크립트 생성 후 실행하고 Read 도구로 결과 읽기.

## 주의사항

1. **한글 파일명**: PowerShell에서 한글 파일명 처리 시 인코딩 문제 발생 가능. 영문 임시 파일명 사용 권장

2. **인코딩**:
   - 콘솔 직접 출력 시 한글 깨짐
   - 반드시 UTF-8로 파일에 저장 후 Read 도구로 읽기

3. **docx 확장자**:
   - `Expand-Archive`는 `.zip` 확장자만 지원
   - `.docx`를 `.zip`으로 복사 필요

4. **임시 파일 정리**: 작업 후 임시 파일 삭제 권장
   ```powershell
   powershell -Command "Remove-Item 'C:\Users\buff4\AppData\Local\Temp\temp_doc.*' -Force; Remove-Item 'C:\Users\buff4\AppData\Local\Temp\doc_extracted' -Recurse -Force"
   ```

## docx 내부 구조

```
document.docx (ZIP)
├── [Content_Types].xml
├── _rels/
├── docProps/
└── word/
    ├── document.xml      ← 본문 텍스트
    ├── styles.xml
    ├── settings.xml
    ├── comments.xml      ← 댓글 (있는 경우)
    └── media/            ← 이미지 (있는 경우)
```

## 텍스트 추출 정규식 설명

```regex
<w:t[^>]*>([^<]*)</w:t>
```

- `<w:t>`: Word 텍스트 태그
- `[^>]*`: 태그 속성 (예: `xml:space="preserve"`)
- `([^<]*)`: 실제 텍스트 내용 (캡처 그룹)
- `</w:t>`: 닫는 태그

## 대안: pandoc 사용 (설치된 경우)

```bash
pandoc input.docx -o output.md
```

pandoc이 설치되어 있으면 마크다운으로 변환하여 더 깔끔하게 읽을 수 있음.
