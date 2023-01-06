import React from "react";
import { useTranslation } from "react-i18next";
// import { Link } from 'react-router';
// import { isMobile } from '@/configs';
// import enLogoImg from '@/assets/enLogo.png';
// import qrcodeWechat from '@/assets/qrcode-wechat.png';
// import qrcodeEnWechat from '@/assets/qrcode-En-wechat.png';
// import qrcodeTiktok from '@/assets/qrcode-tiktok.png';
// import { injectLocale } from '@/components/locale-provider';
// import weixinLogo from '@/assets/icon-weixin.png';
// import weiboLogo from '@/assets/icon-weibo.png';
// import tiktokLogo from '@/assets/icon-tiktok.png';
// import facebookLogo from '@/assets/facebookLogo.png';
// import instagramLogo from '@/assets/instagramLogo.png';
// import linkedInLogo from '@/assets/LinkedInLogo.png';
// import recordIcon from '@/assets/icon-record.png';
import "./index.less";

function FooterBar() {
  const { t, i18n } = useTranslation();

  return (
    <div className="g-footer">
      <div className="left">
        {/* {
            locale === 'zh-cn' ? (
              <img src={logoImg} alt="" className="logo" />
            ) : (
              <img src={enLogoImg} alt="" className="logo" />
            )
          } */}
        {/*<img src={enLogoImg} alt="" className="logo" />*/}
        <div className="tips">{t("copyright")}</div>
        {/*<a href="https://beian.miit.gov.cn/">*/}
        {/*  <div className="tips">浙ICP备xxxx号-1</div>*/}
        {/*</a>*/}
        {/*<div className="tips">*/}
        {/*  /!*<img src={recordIcon} alt="" />*!/*/}
        {/*  浙公网安备 33010802010374号*/}
        {/*</div>*/}
        {/*{*/}
        {/*  locale === 'zh-cn' ? (*/}
        {/*    <div className="agreement">*/}
        {/*      /!*<Link to={{ pathname: '/service-agreement' }}>*!/*/}
        {/*      /!*  <span>服务协议</span>·*!/*/}
        {/*      /!*</Link>*!/*/}
        {/*      /!*<Link to={{ pathname: '/privacy-agreement' }}>*!/*/}
        {/*      /!*  <span>隐私政策</span>*!/*/}
        {/*      /!*</Link>*!/*/}
        {/*    </div>*/}
        {/*  ) : null*/}
        {/*}*/}
      </div>
      {/*<div className="middle">*/}
      {/*  <div className="link-item">*/}
      {/*    /!*<Link to={{ pathname: '/home' }}>*!/*/}
      {/*    /!*  <div className="title action">{footer.homepage}</div>*!/*/}
      {/*    /!*</Link>*!/*/}
      {/*  </div>*/}
      {/*  <div className="link-item">*/}
      {/*    <div className="title">{footer.brandName}</div>*/}
      {/*    /!*<Link to={{ pathname: '/aboutus' }}>*!/*/}
      {/*    /!*  <div className="link">{footer.brandIntroduce}</div>*!/*/}
      {/*    /!*</Link>*!/*/}
      {/*    /!*{*!/*/}
      {/*    /!*  locale === 'zh-cn' ? (*!/*/}
      {/*    /!*    <a target="_blank" rel="noreferrer noopener" href="https://www.liepin.com/company/10088941/">*!/*/}
      {/*    /!*      <div className="link">{footer.recruit}</div>*!/*/}
      {/*    /!*    </a>*!/*/}
      {/*    /!*  ) : null*!/*/}
      {/*    /!*}*!/*/}

      {/*  </div>*/}
      {/*  <div className="link-item">*/}
      {/*    <div className="title">{footer.work}</div>*/}
      {/*    /!*<Link to={{ pathname: '/cars' }}>*!/*/}
      {/*    /!*  <div className="link">{footer.car}</div>*!/*/}
      {/*    /!*</Link>*!/*/}
      {/*    /!*<Link to={{ pathname: '/service' }}>*!/*/}
      {/*    /!*  <div className="link">{footer.service}</div>*!/*/}
      {/*    /!*</Link>*!/*/}
      {/*    /!*{*!/*/}
      {/*    /!*  locale === 'zh-cn' ? (*!/*/}
      {/*    /!*    <Link to={{ pathname: '/companycooperation' }}>*!/*/}
      {/*    /!*      <div className="link">{footer.companyCooperation}</div>*!/*/}
      {/*    /!*    </Link>*!/*/}
      {/*    /!*  ) : ''*!/*/}
      {/*    /!*}*!/*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="right">*/}
      {/*  <span>{footer.media}：</span>*/}
      {/*  <a className="weixin">*/}
      {/*    /!*<img src={weixinLogo} alt="" className="icon" onClick={this.showQrcode} />*!/*/}
      {/*    /!*{ showQrcode ? <img src={qrcodeWechatImg} alt="" className="qrcode" /> : null}*!/*/}
      {/*  </a>*/}
      {/*  {*/}
      {/*    locale === 'zh-cn' ? (*/}
      {/*      <React.Fragment>*/}
      {/*        /!*<a href=""*!/*/}
      {/*        /!*   target="_blank"*!/*/}
      {/*        /!*   rel="noreferrer noopener"*!/*/}
      {/*        /!*><img className="icon" src={weiboLogo} alt="" />*!/*/}
      {/*        /!*</a>*!/*/}
      {/*        /!*<a className="weixin" style={{ margin: '0 0 0 0.24rem' }}>*!/*/}
      {/*        /!*  <img src={tiktokLogo} alt="" className="icon" onClick={this.showTiktok} />*!/*/}
      {/*        /!*  { showTiktok ? <img src={qrcodeTiktok} alt="" className="qrcode" /> : null}*!/*/}
      {/*        /!*</a>*!/*/}
      {/*      </React.Fragment>*/}
      {/*    ) : (*/}
      {/*      <React.Fragment>*/}
      {/*        /!*<a href=""*!/*/}
      {/*        /!*   target="_blank"*!/*/}
      {/*        /!*   className="weixin"*!/*/}
      {/*        /!*   rel="noreferrer noopener"*!/*/}
      {/*        /!*><img className="icon" src={facebookLogo} alt="" />*!/*/}
      {/*        /!*</a>*!/*/}
      {/*        /!*<a href=""*!/*/}
      {/*        /!*   target="_blank"*!/*/}
      {/*        /!*   className="weixin"*!/*/}
      {/*        /!*   rel="noreferrer noopener"*!/*/}
      {/*        /!*><img className="icon" src={instagramLogo} alt="" />*!/*/}
      {/*        /!*</a>*!/*/}
      {/*        /!*<a href=""*!/*/}
      {/*        /!*   target="_blank"*!/*/}
      {/*        /!*   className="weixin"*!/*/}
      {/*        /!*   rel="noreferrer noopener"*!/*/}
      {/*        /!*><img className="icon" src={linkedInLogo} alt="" />*!/*/}
      {/*        /!*</a>*!/*/}
      {/*      </React.Fragment>*/}
      {/*    )*/}
      {/*  }*/}

      {/*</div>*/}
    </div>
  );
}

export default FooterBar;
