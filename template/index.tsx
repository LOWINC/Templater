import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux';

import style from './index.module.less'


interface IProps {
  dispatch: ({ type: string, payload: any }) => Promise<any>
  _MODULE_NAME_: any
  loading: {
    models: {
      _MODULE_NAME_: boolean
    }
  },
}



@connect<any>(({ loading, _MODULE_NAME_ }) => ({
  ...loading, _MODULE_NAME_
}))
class Index extends Component<IProps> {


  componentDidMount = () => {
    // this.props.dispatch({
    //   type: "_MODULE_NAME_/getDataById",
    //   payload: {
    //     id: this.$router.params.id
    //   }
    // })
  }

  componentWillUnmount = () => {
    // this.props.dispatch({
    //   type: "_MODULE_NAME_/initState",
    //   payload: {}
    // })
  }



  render () {
    return (
      <View className={style['page']}>

      </View>
    )
  }
}

export default Index