import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './content/content.component';
import { ImageCardComponent } from './profile/image-card/image-card.component';
import { SocialCardComponent } from './profile/social-card/social-card.component';
import { SkillCardComponent } from './profile/skill-card/skill-card.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { CertificatesComponent } from './content/certificates/certificates.component';
import { OthersComponent } from './content/others/others.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ContentComponent,
    ImageCardComponent,
    SocialCardComponent,
    SkillCardComponent,
    ProjectsComponent,
    CertificatesComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
