import s from "./banners.module.sass";
import BannersStore from "../../../stores/BannersStore";
// import { toJS } from "mobx";
import { useEffect, useState } from "react";
import Banner from "./Banner";

const Banners = () => {
  const [banners, setBanners] = useState([]);
  const data = BannersStore.getBanners().data;
  useEffect(() => {
    setBanners(data);
  }, [data]);

  // const deleteBanner = async (id) => {
  //   await BannersStore.deleteBanner(id);

  //   await BannersStore.updateBanners();
  //   const data = await BannersStore.getBanners().data;
  //   setBanners(data);
  // };

  return (
    <div className={`${s.banners}`}>
      {banners.map((item, index) => {
        return (
          <Banner key={`banner_card_${index}`} item={item}/>
        );
      })}
    </div>
  );
};

export default Banners;
