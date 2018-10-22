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



@connect(({ _MODULE_NAME_ }) => ({
  ..._MODULE_NAME_,
}))
class Index extends Component<PageProps, PageState> {

  state: PageState = {

  }

  render () {
    return (

      <View className="page--_PAGE_NAME_">

      </View>
    )
  }
}

export default Index