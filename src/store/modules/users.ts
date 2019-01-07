import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "@/store";
import {Profile, User, UserSubmit} from "@/store/models";
import {loginUser} from "@/store/api";

@Module({
    namespaced: true,
    name: "users",
    store,
    dynamic: true
})
class UsersModule extends VuexModule {
    public user?: User | null = null;
    public profile?: Profile | null = null;

    @Mutation
    setUser(user: User) { this.user = user; }

    get username() {
        return this.user && this.user.username || null;
    }
    @Action({commit: "setUser"})
    public async login(userSubmit: UserSubmit) {
        return await loginUser(userSubmit);
    }


}

export default getModule(UsersModule);

