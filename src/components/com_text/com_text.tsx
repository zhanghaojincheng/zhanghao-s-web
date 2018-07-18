import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { AppStore } from '../../App.store';
import { withRouter } from 'react-router-dom';
import { TextStore } from './text.store';

interface IRouter {
    textStore?: TextStore;
    appStore?: AppStore;
    history: any;
    match: any;
    location: any;
}

@inject('textStore', 'appStore')
@observer
class ComText extends React.Component<IRouter> {
    public textStore: TextStore;

    public state = {
        old: {
            title: 'vue + typescript 进阶篇',
            content: 'TypeScript 是 JavaScript 的强类型版本。然后在编译期去掉类型和特有语法，生成纯粹的 JavaScript 代码。由于最终在浏览器中运行的仍然是 JavaScript，所以 TypeScript 并不依赖于浏览器的支持，也并不会带来兼容性问题。TypeScript 是 JavaScript 的超集，这意味着他支持所有的 JavaScript 语法。并在此之上对 JavaScript 添加了一些扩展，如 class / interface / module 等。这样会大大提升代码的可阅读性。与此同时，TypeScript 也是 JavaScript ES6 的超集，Google 的 Angular 2.0 也宣布采用 TypeScript 进行开发。这更是充分说明了这是一门面向未来并且脚踏实地的语言。',
            time: '2018-07-18'
        },
        new: {
            title: 'Vue 2 + Webpack 2 脚手架',
            content: '# clone or fork this repo $ cd vuepack $ npm install # edit files and start developing $ npm run dev # bundle all scripts and styles for production use $ npm run build',
            time: '2018-07-18'
        },
        none: {
            title: '暂无内容'
        },
        info: {
            title: '',
            content: '',
            time: ''
        }
    };
    
    // constructor(props: IRouter) {
    //     super(props);
    // }

    public componentDidMount() {
        const user = this.props.match.params.user;
        if (user) {
            user === 'new' ? this.setState({ info: this.state.new })
            : user === 'old' ? this.setState({ info : this.state.old })
            : this.setState({ info: this.state.none });
        }
    }

    public render() {
        const info = this.state.info;
        return (
            <div>
                {info.title}
                <br/>
                {info.content}
                <br/>
                {info.time}
            </div>
        )
    }
}

export default withRouter(ComText);