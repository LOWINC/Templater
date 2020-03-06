import {View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import Taro, {useDidShow, useRouter} from "@tarojs/taro";
import classNames from "classnames/bind";
import style from "./index.module.less";

const cx = classNames.bind(style);

function mapStateToProps(store) {
  return {
    _MODULE_NAME_: store._MODULE_NAME_,
    loading: store.loading.models._MODULE_NAME_
  };
}

interface Dispatch {
  dispatch: ({type: string, payload: any}) => Promise<any>;
}

type IProps = ReturnType<typeof mapStateToProps> | Dispatch;

function Page(props: IProps) {
  const router = useRouter();

  useDidShow(() => {
    console.log(router.params.id);
    Taro.showToast({
      title: "id:" + router.params.id,
      icon: "none"
    });
  });

  return <View classNames={cx("page")}> 123 </View>;
}

export default connect(mapStateToProps)(Page as any);
