<script setup>

</script>

<template>
  <article>
    <header></header>
    <div class="user">
      <img src="@/assets/img/user.png" alt="">
    </div>

    <div class="flex-center flex-column">
      <p>Wawan Purwanto</p>
      <span>I have experince 1 year UI/UX Design</span>
      <div class="flex-align-center gap">
        <div class="flex-column flex-center">
          <p>Profile Views</p>
          <span>16+</span>
        </div>
        <div class="flex-column flex-center">
          <p>Profile Post</p>
          <span>400+</span>
        </div>
      </div>
      <div class="flex-align-center bottom">
        <div class="flex-align-center cursor">
          <div class="icon flex-center">
            <svg class="save" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 18L7 13L0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H12C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V18Z" fill="white"/>
            </svg>
          </div>
          <span>Saved</span>
        </div>
        <div class="flex-align-center cursor">
          <div class="icon flex-center">
            <svg class="award" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" fill="white"/>
              <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" fill="white"/>
            </svg>
          </div>
          <span>Try Premium</span>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">

article {
  width: rem(292);
  height: rem(330);
  background: rgba(255, 255, 255, 1);
  border-radius: 32px;
  position: relative;

  header {
    width: 100%;
    height: rem(99);
    background: rgba(52, 86, 255, 1);
    border-radius: 32px 32px 0 0;
    margin-bottom: rem(46);
  }

  .user {
    position: absolute;
    left: 50%;
    top: 12%;
    transform: translateX(-50%);
    width: rem(102);
    height: rem(102);
    background: #FFFFFF;
    border-radius: 50%;
    padding: 6px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}

p {
  @include style-font(14, 500);
  margin-bottom: rem(10);
  color: rgba(7, 9, 40, 1);
}

span {
  @include style-font(12);
  color: $black;
}

.gap {
  gap: rem(48);
  margin: rem(23) 0 rem(37);
}

.icon {
  width: rem(32);
  height: rem(32);
  background: $blue;
  border-radius: 50%;
  padding: 4px;
  margin-right: 5px;

  .save {
    width: rem(14);
    height: rem(18);
  }
  .award {
    width: rem(24);
    height: rem(24);
  }
}

.cursor {
  cursor: pointer;
}

.bottom {
  gap: rem(32);
}

</style>