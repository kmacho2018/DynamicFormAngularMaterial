import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  model = {
    firstname: {
      type: 'text',
      value: '',
      label: 'FirstName',
      rules: {
        required: true,
      },
    },
    lastname: {
      type: 'text',
      value: '',
      label: 'LastName',
    },
    address: {
      type: 'textarea',
      value: '',
      label: 'Address',
    },
    age: {
      type: 'number',
      value: '',
      label: 'age',
    },
    email: {
      type: 'email',
      value: '',
      label: 'Email',
    },
    birthDay: {
      type: 'date',
      value: '',
      label: 'Birthday',
    },
    workType: {
      label: 'Work Type',
      value: 'premium',
      type: 'radio',
      options: [
        {
          label: 'Enterprise',
          value: '1500',
        },
        {
          label: 'Home',
          value: '6',
        },
        {
          label: 'Personal',
          value: '1',
        },
      ],
    },
    newsletterIn: {
      label: 'Suscribe to newsletter',
      value: 'email',
      type: 'checkbox',
    },
    subscriptionType: {
      label: 'Suscription Type',
      value: 'premium',
      type: 'select',
      options: [
        {
          label: 'Pick one',
          value: '',
        },
        {
          label: 'Premium',
          value: 'premium',
        },
        {
          label: 'Basic',
          value: 'basic',
        },
      ],
    },
    country: {
      id: 'country',
      label: 'Country',
      type: 'select',
      options: [
        {
          label: 'Spain',
          value: 'ES',
        },
        {
          label: 'USA',
          value: 'US',
        },
      ],
      provideData: [
        {
          label: 'Barcelona',
          sourceValue: 'ES',
          value: 'BCN',
        },
        {
          label: 'Madrid',
          sourceValue: 'ES',
          value: 'MDN',
        },
        {
          label: 'New York',
          sourceValue: 'US',
          value: 'NYC',
        },
        {
          label: 'Cleveland',
          sourceValue: 'CLV',
          value: 'E',
        },
      ],
    },
    city: {
      label: 'City',
      type: 'select',
      link: 'country',
      value: '',
      options: [
        {
          label: 'Select Country First',
          value: '',
        },
      ],
    },
  };
  constructor(private breakpointObserver: BreakpointObserver) {}
}
