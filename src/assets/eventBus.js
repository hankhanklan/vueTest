import Vue from 'vue'
export default new Vue
//一个中间介质来作为一个中央事件总线
//eventBus中我们只创建了一个新的Vue实例，以后它就承担起了组件之间通信的桥梁了，也就是中央事件总线。