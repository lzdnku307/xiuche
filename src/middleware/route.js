// 在这个中间件可以对路由进行拦截，然后做一些验证操作

export default function({ isHMR, app, store, route, params, error, redirect }) {
    if (isHMR) {
        return;
    }
}

