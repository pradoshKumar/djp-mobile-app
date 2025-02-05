import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule),
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'my-pitara',
    loadChildren: () => import('./pages/mypitara/mypitara.module').then(m => m.MyPitaraPageModule)
  },
  {
    path: 'story',
    loadChildren: () => import('./pages/story/story.module').then(m => m.StoryPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./pages/activity/activity.module').then(m => m.ActivityPageModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then( m => m.PlayerPageModule)
  },
  {
    path: 'bot',
    loadChildren: () => import('./pages/bot/bot.module').then( m => m.BotPageModule)
  },
  {
    path: 'view-all',
    loadChildren: () => import('./pages/view-all/view-all.module').then( m => m.ViewAllPageModule)
  },
  {
    path: 'create-playlist',
    loadChildren: () => import('./pages/create-playlist/create-playlist.module').then( m => m.CreatePlaylistPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
