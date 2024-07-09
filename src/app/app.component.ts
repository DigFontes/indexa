import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SpaceseparatorComponent } from './components/spaceseparator/spaceseparator.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

import agenda from './agenda.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    HeaderComponent,
    SpaceseparatorComponent,
    ContactComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = agenda;

  filterByText: string = '';

  private ponctuationRemover(text: string): string {
    return text.normalize('NDF').replace(/[\u0300-\u036f]/g, '');
  }

  contactFilterByText(): Contact[] {
    if (!this.filterByText) {
      return this.contacts;
    }
    return this.contacts.filter((contact) => {
      return this.ponctuationRemover(contact.name)
        .toLowerCase()
        .includes(this.ponctuationRemover(this.filterByText).toLowerCase());
    });
  }

  contactFilterByFirstLetter(letter: string): Contact[] {
    return this.contactFilterByText().filter((contact) => {
      return this.ponctuationRemover(contact.name)
        .toLowerCase()
        .startsWith(this.ponctuationRemover(letter).toLowerCase());
    });
  }
}
