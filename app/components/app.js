/**
 * Created by xinfan on 2017/4/4.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {connect} from 'react-redux';
import {main} from './../actions/mainAction';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {Main} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    ceshidaima {Main.count}
                </Text>
                <Text style={styles.instructions} onPress={this.onPress2.bind(this)}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions} onPress={this.onPress.bind(this)}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }

    onPress() {
        this.props.add(10)
    }

    onPress2() {
        this.props.remove(10)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
function ShowObjProperty(Obj) {
    var PropertyList = '';
    var PropertyCount = 0;
    for (i in Obj) {
        if (Obj.i != null)
            PropertyList = PropertyList + i + '属性：' + Obj.i + '\r\n';
        else
            PropertyList = PropertyList + i + '方法\r\n';
    }
    alert(PropertyList);
}
/*
 * 用来遍历指定对象所有的属性名称和值
 * obj 需要遍历的对象
 * author: Jet Mah
 */
function allPrpos(obj) {
// 用来保存所有的属性名称和值
    var props = "";
// 开始遍历
    for (var p in obj) {
// 方法
        if (typeof ( obj [p]) == " function ") {
            obj [p]();
        } else {
// p 为属性名称，obj[p]为对应属性的值
            props += p + " = " + obj [p] + " \t ";
        }
    }
// 最后显示所有的属性
    alert(props);
}

export default connect((state) => {
        const {Main} = state; // => var Main = state.Main;璋冪敤rootReducer涓０鏄庣殑reducer
        return {
            Main // 1.鐩稿綋浜庤繑鍥濵ain:Main锛屽綋key鍜寁alue鐩稿悓鏃讹紝鍙渷鐣ey ==> es6锛堝嵆鍙�氳繃this.props.Main鑾峰彇state涓殑鐘舵�佸�硷級
        }
    }, main// 2.娉ㄥ叆action,鍗冲彲璋冪敤action涓０鏄庣殑鏂规硶,锛堝嵆鍙�氳繃this.props.main鑾峰彇,鐢ㄤ簬璋冪敤main涓殑鏂规硶锛�
)(App) // 3.灏嗙粍浠舵敞鍏�
