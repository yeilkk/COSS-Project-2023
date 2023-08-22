FROM python:3.9.7

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# 소스 코드 복사
COPY . .

# Flask 애플리케이션 실행
CMD ["python", "app.py"]
