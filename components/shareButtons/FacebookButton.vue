<template>
  <button
    class="share-button share-button--facebook"
    type="button"
    :url="url"
    :btnText="btnText"
    :modalWidth="modalWidth"
    :modalHeight="modalHeight"
    :hasIcon="hasIcon"
    :hasCounter="hasCounter"
    :digitsCounter="digitsCounter"
    :keyCounter="keyCounter"
    :isBlank="isBlank"
    @click="openShareWindow"
  >
    <icon iconName="Facebook" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
      />
    </icon>
    <span class="share-button__text" v-if="btnText">{{btnText}}</span>
    <span class="share-button__counter" v-if="hasCounter && counter > 0">{{ shortСounter }}</span>
  </button>
</template>
 
<script>
import Icon from "./icon/Icon.vue";
import {
  getDocumentHref,
  eventEmit,
  createWindow,
  getRandomNumber,
  getShortNumber
} from "./helpers";

export default {
  name: "FacebookShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    btnText: { type: String, default: "Facebook" },
    modalWidth: { type: Number, default: 500 },
    modalHeight: { type: Number, default: 500 },
    hasIcon: { type: Boolean, default: true },
    hasCounter: { type: Boolean, default: false },
    digitsCounter: { type: Number, default: 0 },
    keyCounter: { type: String, default: "" },
    isBlank: { type: Boolean, default: true }
  },
  mounted() {
    if (this.$props.hasCounter) this.getShareCounter();
  },
  methods: {
    openShareWindow() {
      if (this.$props.hasCounter) {
        eventEmit(this, "onShareCounter", {
          name: "Facebook",
          counter: this.counter
        });
      } else {
        eventEmit(this, "onShare", { name: "Facebook" });
      }
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        this.$props.url
      )}`;

      return this.$props.isBlank
        ? window.open(url, "__blank")
        : window.open(url, "Share this", configWindow);
    },

    getShareCounter() {
      const callback =
        this.$props.keyCounter || `Facebook_${getRandomNumber()}`;
      const script = document.createElement("script");
      script.src = `https://graph.facebook.com?id=${encodeURIComponent(
        this.$props.url
      )}&callback=${callback}`;
      document.body.appendChild(script);

      window[callback] = count => {
        if (!count) return;
        this.counter = count.share.share_count;
        this.shortСounter = getShortNumber(
          this.counter,
          this.$props.digitsCounter
        );
      };
    }
  },
  data() {
    return {
      counter: 0,
      shortСounter: 0
    };
  }
};
</script>

<style lang="stylus" scoped>
$main-color = hsla(221, 44%, 41%, 1);
$focus-color = hsla(221, 38%, 66%, 0.4);
$hover-color = hsla(221, 44%, 41%, 0.9);
$painted-color = hsla(220, 21%, 31%, 1);

.share-button * 
  box-sizing: border-box;


.share-button 
  display: inline-block;
  min-width: 42px;
  min-height: 42px;
  padding: 10px 8px;
  margin: 4px;
  color: #fff;
  background-color: $main-color;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-weight: 400;
  vertical-align: top;
  user-select: none;
  border: none;
  border-radius: 4px;
  box-shadow: none;
  text-rendering: auto;
  text-indent: 0px;
  text-align: center;
  letter-spacing: normal;
  word-spacing: normal;
  text-shadow: none;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  &:disabled 
    opacity: 0.9;
  

  &:focus 
    outline: none;
    box-shadow: 0 0 0 3px $focus-color;
  

  &:hover 
    background-color: $hover-color;
  

  &:not(:disabled):not(.disabled) 
    cursor: pointer;
  

  &:last-child 
    margin-right: 0;
  

  &__icon 
    display: inline-block;
    padding: 0;
    margin: 0 7px;
    font-size: 0;
    vertical-align: middle;

    path 
      fill: #fff;
    

    &:last-child 
      margin: 0;

  &__text 
    display: inline-block;
    margin: 0 7px;
    font-size: 16px;
    vertical-align: middle;
  

  &__counter 
    display: inline-block;
    padding: 3px 10px;
    margin-left: 4px;
    font-size: 12px;
    border-left: 1px solid #fff;
    vertical-align: middle;
  

  &--circle 
    min-width: 42px;
    min-height: 42px;
    padding: 10px;
    border-radius: 42px;
  

  &--outline 
    background-color: transparent;
    border: 1px solid;
    background-color: transparent;
    border-color: $main-color;

    .share-button__text 
      color: $main-color;
    

    .share-button__icon path 
      fill: $main-color;
    

    .share-button__counter 
      color: $hover-color;
      border-color: $hover-color;

    &:hover 
      background-color: transparent;
      border-color: $hover-color;

      .share-button__text 
        color: $main-color;

      .share-button__icon path 
        fill: $hover-color;
      

  &--painted 
    position: relative;
    min-width: 42px;
    min-height: 42px;
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 42px;
    background-color: transparent;
    border: 3px solid;
    border-color: $painted-color;

    &::before 
      content: "";
      z-index: -1;
      position: absolute;
      top: -1.5px;
      left: -1.5px;
      display: block;
      width: calc(100% + 3px);
      height: calc(100% + 3px);
      background-color: $main-color;
      border-radius: 50%;
      transform: translate3d(3px, 2px, 0);
      transition: transform 0.2s ease-in-out;
    

    .share-button__icon 
      width: 30px;
      height: 30px;
      margin: 0;
    

    .share-button__text 
      display: none;
    

    .share-button__counter 
      position: absolute;
      bottom: -30px;
      right: -7px;
      margin: 0;
      padding: 4px 10px;
      border: 3px solid;
      font-size: 8px;
      border-radius: 15px;
      color: #fff;
      border-color: $painted-color;

      &::before 
        content: "";
        z-index: -1;
        position: absolute;
        top: -1.65px;
        left: -1.5px;
        display: block;
        width: calc(100% + 3px);
        height: calc(100% + 3px);
        border-radius: 15px;
        transform: translate3d(-3px, 1.5px, 0);
        transition: transform 0.2s ease-in-out;
        background-color: $main-color;
      

    &:hover 
      &::before 
        transform: translate3d(0, 0, 0);
      

      .share-button__counter::before 
        transform: translate3d(0px, 0px, 0)
    

    &:focus 
      &::before 
        transform: translate3d(0, 0, 0);
      

      .share-button__counter::before 
        transform: translate3d(0px, 0px, 0);


@media (max-width: 768px) 
  .share-button 
    min-width: 38px;
    min-height: 38px;
    padding: 8px 8px;
    margin: 2px;

    &__icon 
      width: 18px;
      height: 18px;
      margin: 0 4px;
    

    &__text 
      margin: 0 4px;
      font-size: 14px;
    

    &--circle 
      border-radius: 38px;
    

    &--painted 
      min-width: 48px;
      min-height: 48px;
      margin: 4px 4px 20px 4px;

      &::before 
        transform: translate3d(2.5px, 1.5px, 0);

      .share-button__icon 
        width: 20px;
        height: 20px;
      

      .share-button__counter 
        bottom: -24px;
        right: -8px;
        padding: 2px 7px;

        &::before 
          transform: translate3d(-2px, 1.75px, 0);
</style>
