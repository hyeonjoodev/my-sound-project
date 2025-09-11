<template>
  <img src="" />
  <button type="button" @click="loginWithKakao">안니옹</button>
  <p id="token-result"></p>
</template>

<script setup>
const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URL;

const loginWithKakao = () => {
  Kakao.Auth.authorize({
    redirectUri: 'REDIRECT_URI' // 앱에 등록된 카카오 로그인에서 사용할 Redirect URI 입력
  });
};

// 아래는 데모를 위한 UI 코드입니다.
const displayToken = () => {
  const token = getCookie('authorize-access-token');

  if (token) {
    Kakao.Auth.setAccessToken(token);
    Kakao.Auth.getStatusInfo()
      .then((res) => {
        if (res.status === 'connected') {
          document.getElementById('token-result').innerText =
            'login success, token: ' + Kakao.Auth.getAccessToken();
        }
      })
      .catch((err) => {
        Kakao.Auth.setAccessToken(null);
      });
  }
};

const getCookie = (name) => {
  const parts = document.cookie.split(name + '=');
  if (parts.length === 2) {
    return parts[1].split(';')[0];
  }
};

const onRedirect = async () => {
  const code = route.query.code;
  if (!code) {
    console.error('인가 코드가 없습니다.');
    return;
  }

  try {
    const response = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: code
      })
    });

    const result = await response.json();
    console.log('Access Token:', result.access_token);

    // 사용자 정보 가져오기
    const userRes = await fetch('https://kapi.kakao.com/v2/user/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${result.access_token}`
      }
    });

    const userInfo = await userRes.json();
    console.log('카카오 사용자 정보:', userInfo);
    login(userInfo.id);
  } catch (err) {
    console.error('토큰 발급 실패:', err);
  }
};
</script>
