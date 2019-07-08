<template lang="pug">
    .shareButtons
        div(v-if='onlyIcon')
            FacebookButton(:isBlank="false" btnText)
            TwitterButton(:isBlank="false" btnText)
            PocketButton(:isBlank="false" btnText)
            TelegramButton(btnText)
        div(v-else)
            FacebookButton(:isBlank="false" )
            TwitterButton(:isBlank="false" )
            PocketButton(:isBlank="false" )
            TelegramButton
</template>
<script>
import FacebookButton from "./FacebookButton";
import TwitterButton from "./TwitterButton";
import PocketButton from "./PocketButton";
import TelegramButton from "./TelegramButton";

export default {
    components:{
        FacebookButton,
        TwitterButton,
        PocketButton,
        TelegramButton
    },
    props:{
        onlyIcon:{type:Boolean, default:false}
    }
}
</script>
<style lang="stylus">
.shareButtons div
    text-align center
    margin 1em 0
</style>
