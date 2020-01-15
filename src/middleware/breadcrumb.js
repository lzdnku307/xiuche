// 处理vue-route的meta
export default function({ store, route }) {
    const title = route.meta.reduce((title, meta) => meta.title || title, '');
    store.commit('appinfo/setTitle', title);
}

