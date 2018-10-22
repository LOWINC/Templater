import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux';


import './index.less'


type StateProps = {

}

type EventProps = {

}


type PageProps = StateProps & EventProps



type PageState = {

}


// TODO: 改名
@connect(({ _MODULE_NAME_ }) => ({
  ..._MODULE_NAME_,
}))
// TODO: 改名
class _PAGE_NAME_ extends Component<PageProps, PageState> {

  state: PageState = {

  }

  render () {
    return (
      // TODO: 改名
      <View className="page--_PAGE_NAME_">

      </View>
    )
  }
}

export default _PAGE_NAME_