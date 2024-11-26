const HelpTypesData = [
    { label: 'Tutoring', id: 1, value: 1, categoryId: 1, description: 'Helping children or adults improve literacy, math, or other academic skills' },
    { label: 'Mentoring', id: 2, value: 2, categoryId: 1, description: 'Offering guidance to students or young professionals' },
    { label: 'Language Teaching', id: 3, value: 3, categoryId: 1, description: 'Teaching English or other languages to non-native speakers' },
    { label: 'Adult Education', id: 4, value: 4, categoryId: 1, description: 'Assisting in classes for adults on topics like job readiness, computer skills, or financial literacy' },
    { label: 'Homework Help', id: 5, value: 5, categoryId: 1, description: 'Supporting students with their schoolwork after school' },

    { label: 'Food Banks', id: 6, value: 6, categoryId: 2, description: 'Sorting, packing, or distributing food to those in need' },
    { label: 'Meal Preparation', id: 7, value: 7, categoryId: 2, description: 'Cooking and serving meals at shelters or community centers' },
    { label: 'Grocery Delivery', id: 8, value: 8, categoryId: 2, description: 'Bringing groceries to seniors or people with disabilities who cannot shop for themselves' },
    { label: 'Community Gardens', id: 9, value: 9, categoryId: 2, description: 'Growing and maintaining produce that can be shared within the community' },

    { label: 'Health Education', id: 10, value: 10, categoryId: 3, description: 'Providing information on nutrition, exercise, mental health, or disease prevention' },
    { label: 'Blood Drives', id: 11, value: 11, categoryId: 3, description: 'Assisting at blood donation events' },
    { label: 'First Aid Training', id: 12, value: 12, categoryId: 3, description: 'Offering first aid or CPR classes' },
    { label: 'Mental Health Support', id: 13, value: 13, categoryId: 3, description: 'Volunteering for helplines or peer support programs' },
    { label: 'Exercise Programs', id: 14, value: 14, categoryId: 3, description: 'Leading group fitness activities like yoga, walking clubs, or sports for community members' },

    { label: 'Companionship', id: 15, value: 15, categoryId: 4, description: 'Visiting or spending time with seniors to reduce loneliness' },
    { label: 'Home Maintenance', id: 16, value: 16, categoryId: 4, description: 'Helping elderly individuals with household tasks like cleaning, gardening, or minor repairs' },
    { label: 'Transportation', id: 17, value: 17, categoryId: 4, description: 'Driving seniors to appointments, grocery stores, or community events' },
    { label: 'Meal Preparation', id: 18, value: 18, categoryId: 4, description: 'Preparing meals for elderly individuals who are unable to cook for themselves' },

    { label: 'Babysitting', id: 19, value: 19, categoryId: 5, description: 'Offering free childcare to struggling families' },
    { label: 'Youth Sports Coaching', id: 20, value: 2, categoryId: 5, description: 'Coaching kids\' sports teams or organizing recreational activities' },
    { label: 'Summer Camps', id: 21, value: 21, categoryId: 5, description: 'Volunteering at or organizing day camps for children' },
    { label: 'After-School Programs', id: 22, value: 22, categoryId: 5, description: 'Supporting after-school clubs and enrichment programs for kids' },
    { label: 'Arts and Crafts', id: 23, value: 23, categoryId: 5, description: 'Leading creative activities for children' },

    { label: 'Shelter Assistance', id: 24, value: 24, categoryId: 6, description: 'Working at homeless shelters, providing meals, beds, and clothing' },
    { label: 'Job Training', id: 25, value: 25, categoryId: 6, description: 'Helping homeless individuals with job skills, resume writing, or interview preparation' },
    { label: 'Clothing Drives', id: 26, value: 26, categoryId: 6, description: 'Collecting and distributing clothes for those in need' },
    { label: 'Housing Assistance', id: 27, value: 27, categoryId: 6, description: 'Supporting organizations that help people find temporary or permanent housing' },
    { label: 'Street Outreach', id: 28, value: 28, categoryId: 6, description: 'Providing basic supplies (food, clothing, hygiene kits) to homeless individuals on the streets' },

    { label: 'Disaster Response', id: 29, value: 29, categoryId: 7, description: 'Assisting with recovery efforts during natural disasters such as floods, fires, or storms' },
    { label: 'Emergency Shelters', id: 30, value: 30, categoryId: 7, description: 'Staffing emergency shelters during crises' },
    { label: 'Search and Rescue', id: 31, value: 31, categoryId: 7, description: 'Assisting in search and rescue operations (for trained volunteers)' },
    { label: 'Rebuilding Efforts', id: 32, value: 32, categoryId: 7, description: 'Helping to rebuild homes and infrastructure after disasters' },

    { label: 'Tree Planting', id: 33, value: 33, categoryId: 8, description: 'Planting trees or restoring green spaces in the community' },
    { label: 'Community Cleanups', id: 34, value: 34, categoryId: 8, description: 'Organizing or participating in litter removal in parks, beaches, or neighborhoods' },
    { label: 'Wildlife Conservation', id: 35, value: 35, categoryId: 8, description: 'Volunteering at animal sanctuaries or nature reserves' },
    { label: 'Recycling Programs', id: 36, value: 36, categoryId: 8, description: 'Running or supporting recycling initiatives' },
    { label: 'Sustainable Education', id: 37, value: 37, categoryId: 8, description: 'Teaching others about sustainability practices and environmental protection' },

    { label: 'Event Planning', id: 38, value: 38, categoryId: 9, description: 'Organizing community events like festivals, fundraisers, or workshops' },
    { label: 'Community Watch', id: 39, value: 39, categoryId: 9, description: 'Participating in neighborhood watch or safety patrols' },
    { label: 'Cultural Events', id: 40, value: 40, categoryId: 9, description: 'Supporting local cultural events, arts festivals, or heritage celebrations' },
    { label: 'Advocacy', id: 41, value: 41, categoryId: 9, description: 'Volunteering for organizations that advocate for social issues like housing rights, poverty reduction, or equality' },
    { label: 'Community Gardens', id: 42, value: 42, categoryId: 9, description: 'Helping with shared garden projects that provide food and green space' },

    { label: 'Fundraising Campaigns', id: 43, value: 43, categoryId: 10, description: 'Organizing or participating in fundraising efforts for local charities or causes' },
    { label: 'Grant Writing', id: 44, value: 44, categoryId: 10, description: 'Assisting nonprofits in writing grant proposals to secure funding' },
    { label: 'Office Support', id: 45, value: 45, categoryId: 10, description: 'Helping with administrative tasks for nonprofits or community organizations (data entry, answering phones, etc' },
    { label: 'Event Volunteering', id: 46, value: 46, categoryId: 10, description: 'Assisting with setting up or staffing fundraising events like charity walks or galas' },

    { label: 'Art Workshops', id: 47, value: 47, categoryId: 11, description: 'Leading art workshops for children, seniors, or underserved groups' },
    { label: 'Theater or Music Groups', id: 48, value: 48, categoryId: 11, description: 'Volunteering with community theater productions, choirs, or orchestras' },
    { label: 'Museum Volunteering', id: 49, value: 49, categoryId: 11, description: 'Assisting at local museums or cultural institutions as a docent or guide' },
    { label: 'Photography or Videography', id: 50, value: 50, categoryId: 11, description: 'Documenting community events or helping nonprofits with media needs' },

    { label: 'Animal Shelters', id: 51, value: 51, categoryId: 12, description: 'Volunteering at animal shelters, helping with feeding, cleaning, and exercising the animals' },
    { label: 'Pet Adoption Events', id: 52, value: 52, categoryId: 12, description: 'Assisting at pet adoption drives' },
    { label: 'Fostering', id: 53, value: 53, categoryId: 12, description: 'Temporarily fostering animals in need until they find permanent homes' },
    { label: 'Wildlife Rescue', id: 54, value: 54, categoryId: 12, description: 'Helping injured or abandoned wildlife (for trained volunteers)' },

    { label: 'Legal Assistance', id: 55, value: 55, categoryId: 13, description: 'Providing free or low-cost legal help for individuals in need (for qualified professionals)' },
    { label: 'Tenant Rights', id: 56, value: 56, categoryId: 13, description: 'Advocating for tenant rights and supporting housing justice initiatives' },
    { label: 'Human Rights Advocacy', id: 57, value: 57, categoryId: 13, description: 'Volunteering for organizations that promote social justice, equality, and civil rights' },

    { label: 'Tech Training', id: 58, value: 58, categoryId: 14, description: 'Teaching basic computer skills to seniors or underserved groups' },
    { label: 'Website Development', id: 59, value: 59, categoryId: 14, description: 'Creating or maintaining websites for local nonprofits' },
    { label: 'Social Media Management', id: 60, value: 60, categoryId: 14, description: 'Helping community organizations manage their online presence' },
    { label: 'Digital Literacy', id: 61, value: 61, categoryId: 14, description: 'Running workshops on internet safety, digital tools, and online communication' },
]

export default HelpTypesData;