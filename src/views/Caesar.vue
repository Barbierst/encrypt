<template>
    <div>
        <h1> {{title}}</h1>
        <div id="ceasar">
            <div class="input">
                <textarea v-model="input"></textarea>
            </div>
            <div class="controls">
                    <font-awesome-icon :icon="['fas', 'lock']" />
                    <input type="number" min="0" max="15" v-model="key"> 
                    <font-awesome-icon :icon="['fas', 'unlock']" />
            </div>
            <div class="output">
                <textarea v-model="output"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { faSpinner, faAlignLeft, lock } from '@fortawesome/free-solid-svg-icons'

library.add(faLock, faUnlock)
 
library.add(faSpinner, faAlignLeft)

export default {
    name: 'Caesar',
    data() {
        return {
            title: 'Caesar cypher',
            input: 'Type the text you want to encrypt',
            output: 'Type the text you want to decrypt',
            key: 1
        }
    }
}
</script>

<style scoped>
#ceasar {
    margin-top: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.controls {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 3em;
}

textarea {
    width: 25vw;
    height: 50vh;
}


</style>




