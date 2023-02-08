<script setup>
import houseIcon from '@/assets/img/house.svg'
import peopleIcon from '@/assets/img/people.svg'
import workIcon from '@/assets/img/work.svg'
import chatIcon from '@/assets/img/chat.svg'
import bellIcon from '@/assets/img/bell.svg'

const navLinks = [
  {
    url: '/',
    img: houseIcon,
    name: 'house',
  },
  {
    url: '/',
    img: peopleIcon,
    name: 'people',
  },
  {
    url: '/',
    img: workIcon,
    name: 'work',
  },
  {
    url: '/',
    img: chatIcon,
    name: 'chat',
  },
  {
    url: '/',
    img: bellIcon,
    name: 'bell',
  },
]

const user = {}

</script>

<template>
  <header>
    <div class="container flex-align-center flex-between">
      <svg class="logo" width="48" height="45" viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.7737 0H3.4889C2.56358 0 1.67617 0.349983 1.02187 0.972955C0.36758 1.59593 0 2.44086 0 3.32188V41.6781C0 42.5591 0.36758 43.4041 1.02187 44.0271C1.67617 44.65 2.56358 45 3.4889 45H43.7737C44.699 45 45.5864 44.65 46.2407 44.0271C46.895 43.4041 47.2626 42.5591 47.2626 41.6781V3.32188C47.2626 2.44086 46.895 1.59593 46.2407 0.972955C45.5864 0.349983 44.699 0 43.7737 0ZM14.0869 38.3344H6.98108V16.8438H14.0869V38.3344ZM10.5291 13.8656C9.72302 13.8613 8.9364 13.6297 8.26846 13.2002C7.60052 12.7706 7.08119 12.1622 6.77603 11.4519C6.47087 10.7416 6.39354 9.96111 6.5538 9.20898C6.71407 8.45685 7.10475 7.76677 7.67653 7.22584C8.24832 6.68491 8.97558 6.31738 9.76655 6.16961C10.5575 6.02185 11.3767 6.10049 12.1208 6.3956C12.8649 6.69071 13.5004 7.18906 13.9473 7.82777C14.3942 8.46648 14.6323 9.21692 14.6317 9.98438C14.6393 10.4982 14.5382 11.0082 14.3344 11.484C14.1305 11.9598 13.8282 12.3917 13.4454 12.7539C13.0625 13.1161 12.607 13.4012 12.106 13.5922C11.6049 13.7832 11.0686 13.8762 10.5291 13.8656ZM40.2782 38.3531H33.1757V26.6125C33.1757 23.15 31.6298 22.0813 29.6343 22.0813C27.5272 22.0813 25.4594 23.5938 25.4594 26.7V38.3531H18.3536V16.8594H25.187V19.8375H25.2789C25.9649 18.5156 28.3674 16.2563 32.0335 16.2563C35.9983 16.2563 40.2815 18.4969 40.2815 25.0594L40.2782 38.3531Z" fill="#0A66C2"/>
      </svg>

      <div class="search">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#070928" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20.9999 21L16.6499 16.65" stroke="#070928" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input type="search" name="search" placeholder="Search Jobs">
      </div>

      <nav class="flex-align-center">
        <router-link :to="link.url" v-for="(link, id) in navLinks" :key="`nav_link_${id}`" class="flex-center">
          <img :src="link.img" :alt="link.name">
        </router-link>
      </nav>

      <div class="user flex-align-center">
        <div class="user_img flex-center">
          <img src="@/assets/img/user.png" alt="">
<!--          <img src="@/assets/img/user.png" alt="" v-if="!user.img">-->
<!--          <span v-else>UN</span>-->
        </div>
        <span>User name</span>
        <div class="arrow flex-center">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9034 0.612341C11.136 0.389472 11.5053 0.397332 11.7282 0.630011C11.951 0.862631 11.9431 1.23189 11.7105 1.45476L6.49608 6.45068C6.27285 6.66461 5.9214 6.66712 5.69507 6.45646L0.408936 1.53557C0.173095 1.3161 0.159896 0.946998 0.379416 0.711156C0.598936 0.475372 0.968042 0.462116 1.20383 0.681636L6.08675 5.22711L10.9034 0.612341Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">

header {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  padding: rem(18);
}

svg {
  cursor: pointer;
}

.logo {
  width: rem(47);
  height: rem(45);
}

.search {
  position: relative;
  width: rem(488);
  height: rem(50);

  input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: #F8F8FA;
    padding: rem(16) rem(32) rem(18) rem(62);
    border: none;
    z-index: 1;
    @include style-font();
    color: $black;

    &::placeholder {
      color: $black;
    }
  }

  svg {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    width: rem(20);
    height: rem(20);
    z-index: 2;
  }
}

nav {
  gap: rem(30);
  padding-right: rem(40);
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);;
  }

  a {
    padding: rem(12);
    background: $blue;
    width: rem(45);
    height: rem(45);
    transition: .2s;
    border-radius: 15px;

    &:hover {
      background: rgba(52, 86, 255, 1);
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
}

.user {
  gap: rem(8);

  span {
    @include style-font(14, 500);
    color: rgba(7, 9, 40, 1);
  }

  &_img {
    width: rem(45);
    height: rem(45);
    border-radius: 50%;
    background: #DBE7FF;
    object-fit: contain;
    padding: 2px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    span {
      @include style-font(18, 500);
    }
  }

  .arrow {
    width: rem(20);
    height: rem(20);
    border-radius: 50%;
    padding: 6px 4px;
    background: $blue;

    svg {
      width: 100%;
      height: 100%;
      cursor: default;
    }
  }

}

</style>