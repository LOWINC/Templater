import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import get from 'lodash/get'

import Loading from '@/components/loading'

import classNames from 'classnames/bind'
import style from './index.module.less'

const cx = classNames.bind(style)

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

  }

  componentWillUnmount = () => {
    this.props.dispatch({
      type: "_MODULE_NAME_/initState",
      payload: {}
    })
  }



  render () {
    const isLoading = this.props.loading.models._MODULE_NAME_
    return (
      <View className={cx('page')}>
        {isLoading && <Loading />}
        <View className={cx('container')}>

        </View>
      </View>
    )
  }
}

export default Index