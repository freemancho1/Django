<template>
<div class="view-user-define-tag page-view text-left">
    <div class="title">Make User Define Tag</div>

    <div class="row items-center">
        <div class="col-3 text-center">
            <user-define-button>My Button</user-define-button>
        </div>
        <div class="col-9 text-left text-h6">
            &lt;user-define-button&gt;<br/>
            &nbsp; &nbsp; My Button<br/>
            &lt;user-define-button&gt;<br/>
            &lt;user-define-button <span>md</span>&gt; &lt;!-- def: middle, sm: small, lg: large --&gt;<br/>
            &nbsp; &nbsp; My Button<br/>
            &lt;user-define-button&gt;
        </div>
    </div>

    <div class="row items-center">
        <div class="col-3 text-center">
            <user-define-button sm>My Button</user-define-button>
        </div>
        <div class="col-9 text-left text-h6">
            &lt;user-define-button <span>sm</span>&gt;<br/>
            &nbsp; &nbsp; My Button<br/>
            &lt;user-define-button&gt;        
        </div>
    </div>

    <div class="row items-center">
        <div class="col-3 text-center">
            <user-define-button lg>My Button</user-define-button>
        </div>
        <div class="col-9 text-left text-h6">
            &lt;user-define-button <span>lg</span>&gt;<br/>
            &nbsp; &nbsp; My Button<br/>
            &lt;user-define-button&gt;        
        </div>
    </div>

    <div class="row items-center">
        <div class="col-3 text-center">
            <user-define-button lg pill bg-blue text-white>My Button</user-define-button>
        </div>
        <div class="col-9 text-left text-h6">
            &lt;user-define-button <span>lg pill bg-blue text-white</span>&gt;<br/>
            &nbsp; &nbsp; My Button<br/>
            &lt;user-define-button&gt;        
        </div>
    </div>

    <div class="row items-center">
        <div class="col-3 text-center">
            <user-define-button type="switch">My Button</user-define-button>
            <user-define-button type="switch">My Button</user-define-button>
        </div>
        <div class="col-9 text-left text-h6">
            &lt;user-define-button <span>type="switch"</span>&gt;<br/>
            &nbsp; &nbsp; My Button<br/>
            &lt;user-define-button&gt;        
        </div>
    </div>    

    <div class="row items-center">
        <div class="col-3 text-center">
            <user-define-button type="reset">My Button</user-define-button>
        </div>
        <div class="col-9 text-left text-h6">
            &lt;user-define-button <span>type="reset"</span>&gt;<br/>
            &nbsp; &nbsp; My Button<br/>
            &lt;user-define-button&gt;        
        </div>
    </div>        

</div>
</template>


<script setup>
import UserDefineButton from '@/components/vue3syntax/UserDefineButton.vue';
</script>

<style scoped>
span {
    color: orangered;
    font-weight: bold;
}
div.row {
    border-bottom: 1px solid rgb(202, 201, 201);
}
</style>