require 'spec_helper'
require 'rails_helper'

feature 'create user' do
    scenario "can create user" do
        visit 'users/new'
        expect(page).to have_content('Sign up')
        fill_in 'Name', :with=>'Example User'
        fill_in 'Email', :with=>'example@railstutorial.org'
        fill_in 'Password', :with=>'foobar'
        fill_in 'Confirmation', :with=>'foobar'
        click_button 'Create my account'
        expect(page).to have_content('Please check your email to activate your account.')

    end
    
    scenario "can create user error" do
        visit 'users/new'
        expect(page).to have_content('Sign up')
        click_button 'Create my account'
        expect(page).to have_content('Name can\'t be blank')
        expect(page).to have_content('Email can\'t be blank')
        expect(page).to have_content('Email is invalid')
        expect(page).to have_content('Password can\'t be blank')
        expect(page).to have_content('Password can\'t be blank')
    end
        
    scenario "can create user password error" do
        visit 'users/new'
        expect(page).to have_content('Sign up')
        fill_in 'Name', :with=>'Michael Jordan'
        fill_in 'Email', :with=>'michaeljordan@chicago.com'
        fill_in 'Password', :with=>'Pass'
        fill_in 'Confirmation', :with=>'Pass'
        click_button 'Create my account'
        expect(page).to have_content('The form contains 1 error.')
        expect(page).to have_content('Password is too short (minimum is 6 characters)')
    end
      
    scenario "can create user e-mail error" do
        visit 'users/new'
        expect(page).to have_content('Sign up')
        fill_in 'Name', :with=>'Michael Jordan'
        fill_in 'Email', :with=>'michaeljordan@chicago'
        fill_in 'Password', :with=>'bulls23'
        fill_in 'Confirmation', :with=>'bulls23'
        click_button 'Create my account'
        expect(page).to have_content('The form contains 1 error.')
        expect(page).to have_content('Email is invalid')
    end
    
feature "Signing in" do
    scenario "Signing in as another user" do
        visit '/sessions/new'
        expect(page).to have_content('Log in')
        fill_in 'Email', :with => 'user@example.com'
        fill_in 'Password', :with => 'pa55word2'
        click_button 'Log in'
        expect(page).to have_content 'Invalid email/password combination'
      end
    end
end

