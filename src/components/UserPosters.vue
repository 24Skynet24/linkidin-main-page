<script setup>

const groups = [
  {
    title: 'UI/UX Design',
    url: '/',
  },
  {
    title: 'UI Design',
    url: '/',
  },
  {
    title: 'UX Design',
    url: '/',
  },
]
const events = [
  {
    title: 'Webinar UI Design at 09:00 am.',
    url: '/',
  }
]
const hastags = [
  {
    title: '#UIDesign',
    url: '/',
  },
  {
    title: '#UIUXDesign',
    url: '/',
  },
  {
    title: '#UIRemote',
    url: '/',
  },
  {
    title: '#wfh',
    url: '/',
  },
  {
    title: '#RemoteWork',
    url: '/',
  },
  {
    title: '#UXDesign',
    url: '/',
  },
  {
    title: '#jobsUIDesign',
    url: '/',
  },
  {
    title: '#Userexperince',
    url: '/',
  },
  {
    title: '#UIUXDesign',
    url: '/',
  },
]

</script>

<template>
  <article class="wrapper">
    <article class="section">
      <div class="flex-align-center flex-between">
        <h3>Groups</h3>
        <div class="arrow flex-center">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9034 0.612341C11.136 0.389472 11.5053 0.397332 11.7282 0.630011C11.951 0.862631 11.9431 1.23189 11.7105 1.45476L6.49608 6.45068C6.27285 6.66461 5.9214 6.66712 5.69507 6.45646L0.408936 1.53557C0.173095 1.3161 0.159896 0.946998 0.379416 0.711156C0.598936 0.475372 0.968042 0.462116 1.20383 0.681636L6.08675 5.22711L10.9034 0.612341Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div class="flex-align-center group" v-for="(item, id) in groups" :key="`group_${id}`">
        <svg class="group_img" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.25 2.5C10.25 3.74262 9.24262 4.75 8 4.75C6.75738 4.75 5.75 3.74262 5.75 2.5C5.75 1.25736 6.75738 0.25 8 0.25C9.24262 0.25 10.25 1.25736 10.25 2.5ZM2.9375 4.75C3.86948 4.75 4.625 3.99451 4.625 3.0625C4.625 2.13052 3.86948 1.375 2.9375 1.375C2.00552 1.375 1.25 2.13052 1.25 3.0625C1.25 3.99451 2.00552 4.75 2.9375 4.75ZM13.0625 4.75C13.9945 4.75 14.75 3.99451 14.75 3.0625C14.75 2.13052 13.9945 1.375 13.0625 1.375C12.1305 1.375 11.375 2.13052 11.375 3.0625C11.375 3.99451 12.1305 4.75 13.0625 4.75ZM4.75004 6.45145C4.93145 6.10861 5.29184 5.875 5.70674 5.875H10.2933C10.7082 5.875 11.0686 6.10861 11.25 6.45145C11.2563 6.46343 11.2624 6.47552 11.2683 6.48773C11.3367 6.62965 11.375 6.78873 11.375 6.95674V10.375C11.375 10.6534 11.3413 10.9239 11.2777 11.1828C10.9157 12.6566 9.58558 13.75 8 13.75C6.41442 13.75 5.08428 12.6567 4.72226 11.1828C4.71854 11.1676 4.71494 11.1524 4.7114 11.1372C4.65487 10.8923 4.625 10.6371 4.625 10.375V6.95674C4.625 6.77421 4.67022 6.60226 4.75004 6.45145ZM3.78125 6.95674C3.78125 6.7768 3.80592 6.60271 3.85207 6.4375H1.25C0.939342 6.4375 0.6875 6.68933 0.6875 7V9.8125C0.6875 11.0551 1.69486 12.0625 2.9375 12.0625C3.33085 12.0625 3.70063 11.9616 4.02234 11.7842C3.86622 11.3435 3.78125 10.8692 3.78125 10.375V6.95674ZM12.2188 10.375C12.2188 10.8692 12.1338 11.3435 11.9777 11.7842C12.2994 11.9616 12.6691 12.0625 13.0625 12.0625C14.3051 12.0625 15.3125 11.0551 15.3125 9.8125V7C15.3125 6.68933 15.0607 6.4375 14.75 6.4375H12.1479C12.1941 6.60271 12.2188 6.7768 12.2188 6.95674V10.375Z" fill="#070928" fill-opacity="0.75"/>
        </svg>
        <router-link :to="item.url">{{ item.title }}</router-link>
      </div>
      <router-link to="/" class="green">More</router-link>
    </article>

    <article class="section">
      <div class="flex-align-center flex-between">
        <h3>Event</h3>
        <div class="arrow flex-center">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9034 0.612341C11.136 0.389472 11.5053 0.397332 11.7282 0.630011C11.951 0.862631 11.9431 1.23189 11.7105 1.45476L6.49608 6.45068C6.27285 6.66461 5.9214 6.66712 5.69507 6.45646L0.408936 1.53557C0.173095 1.3161 0.159896 0.946998 0.379416 0.711156C0.598936 0.475372 0.968042 0.462116 1.20383 0.681636L6.08675 5.22711L10.9034 0.612341Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div class="flex-align-center calendar" v-for="(item, id) in events" :key="`event_${id}`">
        <svg class="calendar_img" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2.25H13.25V0.75H11.75V2.25H4.25V0.75H2.75V2.25H2C1.175 2.25 0.5 2.925 0.5 3.75V15.75C0.5 16.575 1.175 17.25 2 17.25H14C14.825 17.25 15.5 16.575 15.5 15.75V3.75C15.5 2.925 14.825 2.25 14 2.25ZM14 15.75H2V6H14V15.75Z" fill="#070928"/>
        </svg>
        <router-link :to="item.url">{{item.title}}</router-link>
      </div>
    </article>

    <article class="section">
      <div class="flex-align-center flex-between">
        <h3>Followed Hastag</h3>
        <div class="arrow flex-center">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9034 0.612341C11.136 0.389472 11.5053 0.397332 11.7282 0.630011C11.951 0.862631 11.9431 1.23189 11.7105 1.45476L6.49608 6.45068C6.27285 6.66461 5.9214 6.66712 5.69507 6.45646L0.408936 1.53557C0.173095 1.3161 0.159896 0.946998 0.379416 0.711156C0.598936 0.475372 0.968042 0.462116 1.20383 0.681636L6.08675 5.22711L10.9034 0.612341Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div class="flex-wrap">
        <router-link :to="item.url" v-for="(item, id) in hastags" :key="`hashtag_${id}`">
          {{ item.title }}
        </router-link>
      </div>
    </article>
  </article>
</template>

<style scoped lang="scss">

.wrapper {
  margin-top: rem(20);
  background: #FFF;
  width: rem(292);
  height: rem(320);
  border-radius: 32px;
  padding: rem(24);
}

.section {
  margin-bottom: rem(15);

  &:last-child{
    margin-bottom: 0;
  }
}

h3 {
  @include style-font(14, 500);
  color: rgba(7, 9, 40, 1);
}

.arrow {
  width: rem(20);
  height: rem(20);
  border-radius: 50%;
  background: $blue;
  cursor: pointer;

  svg {
    width: 60%;
    height: 70%;
    transform: rotate(270deg);
  }
}

.flex-align-center.flex-between {
  margin-bottom: rem(10);
}

.group {
  margin-bottom: rem(7);

  &:last-child {
    margin-bottom: 0;
  }

  &_img {
    width: rem(14);
    height: rem(14);
    margin-right: 4px;
  }
}

.calendar {
  margin-bottom: rem(7);

  &:last-child {
    margin-bottom: 0;
  }

  &_img {
    width: rem(15);
    height: rem(17);
    margin-right: 4px;
  }
}

a {
  color: $black;
  @include style-font(12, 400);
}

.green {
  color: $green;
  padding-left: rem(18);
  font-weight: 500;
}

.flex-wrap {
  gap: rem(5);
}

</style>