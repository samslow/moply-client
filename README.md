<div align="center">
  <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd375c00a-e717-4701-a303-f2c0d4709f96%2F_2019-12-29_17.06.04.png?table=block&id=ff4b2ed9-f498-4c01-88fc-86bb80f234e1&width=2910&cache=v2" />
</div>

# Moply 모플리

- 모두가 함께 듣는 플레이 리스트 공유 웹 서비스

- Crew
    - Zzerjae(jaeho8032@gmail.com) - Go Server & Data modeling & Infra
    - Samslow(shsdf302@gmail.com) - React Client
    - Kimpuppy(bestjw2@gmail.com) - UI/UX Design with ChatBot

## 주요 기능

- 카카오톡 챗봇으로 본인이 속한 채널에 Youtube Link로 음악 신청
- 카카오톡 챗봇으로 본인이 속한 채널에 메시지 보내기
- 웹에서는 챗봇으로 신청한 곡들과 메시지를 볼 수 있다.

## 사용 예시

- 직장 동료 여러 명과 음악을 공유하여 듣고 싶을 때
- 행사장(ex. 해커톤, 컨퍼런스, 대형 강의 ··· )에서,
BGM을 신청받아서 듣고 싶을 때
- 친구들과 파티룸에서 노래방처럼 연출하고 싶을 때


# 기술 스택

### 1. ChatBot

---

- Kakao i Open Builder

    [카카오 i 오픈빌더](https://i.kakao.com/login)

- 제공 기능
    - 본인이 속한 채널에 음악 신청 보내기
    - 본인이 속한 채널에 메시지 보내기
    - 채널에 속해있지 않다면, 초대 코드로 모플리 채널 입장하기
    - 현재 속한 채널의 링크 카카오톡으로 공유하기

### 2. BackEnd

---

- go server(AWS Lambda)
API Gateway + Lambda + Twirp
- 기능
    - 채널이 생성되면 static 주소 생성
    - 채널 생성 예시 → moply.live/c0A9

- Database

### 3. FrontEnd

---

- React.js

- 화면 별 기능
    1. 채널
        1. 정보
            1. 채널 Id를 갖는다.
            2. 채널 제목을 갖는다.
            3. 채널 Pw를 갖는다.
            4. 채널에 속한 전체 유저 수를 갖는다.
        2. 스키마
            1. 여러 명의 유저를 갖는다
            2. 여러 개의 음악을 갖는다.
            3. 여러 개의 메시지를 갖는다.
        3. 기능
            1. Server API로 n초마다 음악이 추가 여부를 확인하여 Music Queue를 쌓는다.
            2. Server API로 n초마다 메시지 추가 여부를 확인하여 Message Queue를 쌓는다.
                - **2번 기능은 v0.1.0 에서는 들어가지 않습니다.**
            3. 호스트가 채널을 만들 때 비밀번호를 입력한다.
            4. 각 유저의 authtoken을 브라우저 쿠키에 저장한다.
                1. 카카오톡 고유 id를 이용해도 되지 않을까?

### 4. Design

---

- 어도비 프로그램, 스케치, 프로토파이

- ~~챗봇UX(다음버전)
1. 최초 사용자 메세지
2. 재방문자 메세지
3. 채널에 유튜브 링크 보내기
4. 채널에 메세지 보내기~~
- 웹 UX
1. 채널 화면
- 모바일웹 UX
1. 채널 화면
- 브랜딩 (간단히)
1. 로고
2. 컬러
