import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../layout';
import {
  ChartTemplate,
  WhookTemplate,
  ChargeTemplate,
  NewsTemplate,
  StoreTemplate,
  EventTemplate,
  AwardsTemplate,
  WhosfanTemplate,
} from '../templates';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <div>error</div>,
    children: [
      { path: '/', element: <Navigate to='/chart' /> },
      { path: '/chart', element: <ChartTemplate /> },
      { path: '/whook', element: <WhookTemplate /> },
      { path: '/charge', element: <ChargeTemplate /> },
      { path: '/news', element: <NewsTemplate /> },
      { path: '/store', element: <StoreTemplate /> },
      { path: '/event', element: <EventTemplate /> },
      { path: '/awards', element: <AwardsTemplate /> },
      { path: '/whosfan', element: <WhosfanTemplate /> },

      //   { path: '/oauth/naver/redirect', element: <NaverRedirectPage /> },
      //   { path: '/oauth/kakao/redirect', element: <KakaoRedirectPage /> },
      //   { path: '/oauth/google/redirect', element: <GoogleRedirectPage /> },
      //   { path: '/oauth/facebook/redirect', element: <FacebookeRedirectPage /> },
    ],
  },

  //   {
  //     element: <DefaultLayout />,
  //     errorElement: <div>error</div>,
  //     children: [
  //       {
  //         path: '/',
  //         element: <MainPage />,
  //       },
  //       {
  //         path: '/talk',
  //         element: <TalkPage />,
  //       },
  //       {
  //         path: '/keepgoods',
  //         element: <KeepgoodsPage />,
  //       },
  //       {
  //         path: '/setting',
  //         element: <SettingPage />,
  //       },
  //       {
  //         path: '/service',
  //         element: <ServicePage />,
  //       },
  //       {
  //         path: '/detail/:storeId/:goodsId',
  //         element: <GoodsDetailPage />,
  //       },
  //       {
  //         path: '/category',
  //         element: <MainCategoryPage />,
  //       },
  //       {
  //         path: '/search',
  //         element: <SearchPage />,
  //       },
  //       {
  //         path: '/payment/success',
  //         element: <PaymentSuccessPage />,
  //       },
  //       {
  //         path: '/payment/fail',
  //         element: <PaymentFailPage />,
  //       },

  //       {
  //         element: <MystoreLayout />,
  //         children: [
  //           {
  //             path: '/:storeId/store/goods',
  //             element: <MystoreGoodsTemplate />,
  //           },
  //           {
  //             path: '/:storeId/store/review',
  //             element: <MystoreReviewTemplate />,
  //           },
  //           {
  //             path: '/:storeId/store/keep',
  //             element: <MystoreKeepTemplate />,
  //           },
  //           {
  //             path: '/:storeId/store/following',
  //             element: <MystoreFollowingTemplate />,
  //           },
  //           {
  //             path: '/:storeId/store/follower',
  //             element: <MystoreFollowerTemplate />,
  //           },
  //         ],
  //       },

  //       {
  //         element: <MystoreManageLayout />,
  //         children: [
  //           {
  //             path: '/mygoods',
  //             element: <MygoodsPage />,
  //           },
  //           {
  //             path: '/sell',
  //             element: <SellPage />,
  //           },
  //           {
  //             path: '/goodsmanage',
  //             element: <GoodsManagePage />,
  //           },
  //           {
  //             element: <HistoryLayout />,
  //             children: [
  //               {
  //                 path: '/history/sell',
  //                 element: <SellHistoryTemplate />,
  //               },
  //               {
  //                 path: '/history/buy',
  //                 element: <BuyHistoryTemplate />,
  //               },
  //               {
  //                 path: '/history/adjust',
  //                 element: <AdjustmentTemplate />,
  //               },
  //               {
  //                 path: `/history/sell/:id`,
  //                 element: <SellDetailHistoryTemplate />,
  //               },
  //               {
  //                 path: `/history/buy/:id`,
  //                 element: <BuyDetailHistoryTemplate />,
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
]);
