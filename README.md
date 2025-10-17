📝 Note: কেন Firebase Secret Key GitHub-এ কমিট করা যাবে না এবং .env ফাইলের গুরুত্ব
🔐 Firebase Secret Key কমিট না করার কারণ

Firebase-এর secret key (যেমন API key, service account key ইত্যাদি) দিয়ে কেউ তোমার প্রজেক্টে full access পেতে পারে।

এগুলো ফাঁস হলে –

কেউ তোমার Firebase database, authentication system, বা storage-এ প্রবেশ করতে পারে।

অপব্যবহার বা ডেটা লিক হতে পারে।

Firebase bill অযথা বেড়ে যেতে পারে।

প্রজেক্টের নিরাপত্তা নষ্ট হয়ে যেতে পারে।

🧩 .env ফাইলের কাজ ও গুরুত্ব

.env মানে Environment Variable File, যেখানে secret key বা config data কোডের বাইরে আলাদা করে রাখা হয়।

.env ফাইল .gitignore-এ রাখা হয়, তাই এটি GitHub-এ আপলোড হয় না।

এর ফলে কোড secure, clean এবং maintainable থাকে।

আলাদা environment (development, production, test) অনুযায়ী ভিন্ন key ব্যবহার করা যায়।
