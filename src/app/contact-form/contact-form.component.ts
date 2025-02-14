import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email',
    urgency: 'normal'
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeContactForm();
  }

  private initializeContactForm(): void {
    this.contactForm = this.fb.group({
      firstName: [
        this.initialFormState.firstName, 
        [Validators.required, Validators.minLength(2)]
      ],
      lastName: [
        this.initialFormState.lastName,
        [Validators.required, Validators.minLength(2)]
      ],
      email: [
        this.initialFormState.email,
        [Validators.required, Validators.email]
      ],
      phone: [
        this.initialFormState.phone,
        [Validators.pattern('^[0-9]{10}$')]
      ],
      message: [
        this.initialFormState.message,
        [Validators.required, Validators.minLength(10)]
      ],
      preferredContact: [this.initialFormState.preferredContact],
      urgency: [this.initialFormState.urgency]
    });
  }

  submit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
       } else {
      this.markFormControlsAsTouched();
    }
  }

  private markFormControlsAsTouched(): void {
    Object.values(this.contactForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}