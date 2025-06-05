import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./pages/checkout/checkout.module').then(
        (m) => m.CheckoutPageModule
      ),
  },
  {
    path: 'product-detail',
    loadChildren: () =>
      import('./pages/product-detail/product-detail.module').then(
        (m) => m.ProductDetailPageModule
      ),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./pages/notifications/notifications.module').then(
        (m) => m.NotificationsPageModule
      ),
  },
  {
    path: 'product-listing',
    loadChildren: () =>
      import('./pages/product-listing/product-listing.module').then(
        (m) => m.ProductListingPageModule
      ),
  },
  {
    path: 'offers-zone',
    loadChildren: () =>
      import('./pages/offers-zone/offers-zone.module').then(
        (m) => m.OffersZonePageModule
      ),
  },
  {
    path: 'my-orders',
    loadChildren: () =>
      import('./pages/my-orders/my-orders.module').then(
        (m) => m.MyOrdersPageModule
      ),
  },
  {
    path: 'track-order',
    loadChildren: () =>
      import('./pages/track-order/track-order.module').then(
        (m) => m.TrackOrderPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./auth/signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./auth/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./pages/support/support.module').then((m) => m.SupportPageModule),
  },
  {
    path: 'pages/support',
    loadComponent: () =>
      import('./pages/support/support.page').then((m) => m.SupportPage),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
