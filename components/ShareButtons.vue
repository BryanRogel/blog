<template lang="pug">
    lazy-component.shareButtons
        FacebookButton(:isBlank="false")
        TwitterButton(:isBlank="false")
        PocketButton(:isBlank="false")
        TelegramButton
</template>
<script>
import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
import PocketButton from "vue-share-buttons/src/components/PocketButton";
import TelegramButton from "vue-share-buttons/src/components/TelegramButton";

export default {
    components:{
        FacebookButton,
        TwitterButton,
        PocketButton,
        TelegramButton
    }
}
</script>
<style lang="stylus">
.shareButtons
    text-align center
    margin 1em 0
</style>
