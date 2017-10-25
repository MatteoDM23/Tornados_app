# This application helper returns the full page title on a per-page basis. If the page 
# has a title, that title with the base title "CS2012 Assignment 2: Earthquake Data App"
# will be displayed. Otherwise if the page has no title (like the home page) just
# the base title will be seen.


module ApplicationHelper

 
  def full_title(page_title = '')
    base_title = "CS2012 Assignment 2: Earthquake Data App"
    if page_title.empty?
      base_title
    else
      page_title + " | " + base_title
    end
  end
end
