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
@connect(({ MODULE_NAME }) => ({
  ...MODULE_NAME,
}))
// TODO: 改名
class PAGE_NAME extends Component<PageProps, PageState> {

  state: PageState = {

  }

  render () {
    return (
      // TODO: 改名
      <View className="page--PAGE_NAME">

      </View>
    )
  }
}

export default PAGE_NAME