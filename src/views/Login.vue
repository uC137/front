<template>

    <div class="auth-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign up</h1>
                    <p class="text-xs-center">
                        <router-view to="/register">
                            Need an account?
                        </router-view>
                    </p>

                    <!--<ul class="error-messages">-->
                    <!--<li>That email is already taken</li>-->
                    <!--</ul>-->

                    <form>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg"
                                   v-model="email"
                                   type="text" placeholder="Email" name="email">
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg"
                                   v-model="password"
                                   type="password" placeholder="Password" name="password">
                        </fieldset>
                        <button @click.prevent="login()" class="btn btn-lg btn-primary pull-xs-right">
                            Sign in
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>


<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import users from "@/store/modules/users";

    @Component
    export default class Login extends Vue {
        public email = "";
        public password = "";

        public login() {
            users.login({
                email: this.email,
                password: this.password
            });
        }

    }
</script>
