<template>

        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
          </div>
          
</template>

<style>

.loading span{
    width: 30px;
    height:30px;
    margin:0 10px;
    background-color: #2330A3;
    border-radius: 50%;
    display: inline-block;
    animation-name: dots;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

}

.loading span:nth-child(2) {
    background-color: #2330A3;
    animation-delay: 0.4s;
}
.loading span:nth-child(3) {
    background-color: #2330A3;
    animation-delay: 0.8s;
}



@keyframes dots {
    50%{
        opacity: 0;
        transform: scale(0.8) translateY(10px)
    }
    
}
</style>