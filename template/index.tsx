import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux';


import './index.less'


interface IProps {
  dispatch: ({ type: string, payload: any }) => void
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


  render () {
    return (
      <View className="page--_PAGE_NAME_">

      </View>
    )
  }
}

export default Index