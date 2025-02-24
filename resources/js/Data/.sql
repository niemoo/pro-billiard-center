-- EVENTS
INSERT INTO events (title, date, description) VALUES
("Grand Opening Pro Billiard Center Jakarta", "2025-02-28", "Come and join us for the grand opening of Pro Billiard Center Jakarta. We have prepared a lot of surprises for you. Don't miss it! There will be exciting billiard tournaments, live music performances, and delicious food and beverages. Meet and greet with professional billiard players and get a chance to learn from the best. We will also have a lucky draw with amazing prizes. Bring your friends and family for a fun-filled day at Pro Billiard Center Jakarta. We look forward to seeing you there!"),
("Billiard Tournament", "2025-03-15", "Join our billiard tournament and compete with other players to win amazing prizes. The tournament will be held at Pro Billiard Center Jakarta and is open to players of all skill levels. Whether you're a beginner or an experienced player, this tournament is the perfect opportunity to showcase your skills and have fun. Don't miss this chance to test your abilities and meet other billiard enthusiasts. Register now and get ready to show off your billiard skills!"),
("Live Music Night at Pro Billiard", "2025-04-01", "Enjoy an unforgettable night with live music performances at Pro Billiard Center Jakarta. Experience various genres, from jazz to rock, while you play billiards and have fun with friends. Refreshments will be available, so come and enjoy the music, the games, and the good vibes!"),
("Billiard Trick Shot Show", "2025-04-10", "Watch as world-class billiard players perform incredible trick shots at Pro Billiard Center Jakarta. This is a show you won't want to miss! Come and see the most amazing billiard tricks, meet professional players, and get a chance to learn some new tricks yourself!"),
("Ladies' Night Billiard Challenge", "2025-04-18", "Calling all ladies! Join us for a fun and competitive night at the Ladies' Night Billiard Challenge. Whether you're a beginner or an expert, this event is for everyone. Come, bring your friends, and enjoy special deals on drinks and snacks while competing for great prizes!"),
("Kids Billiard Fun Day", "2025-05-01", "A special day for kids to learn and enjoy billiards. Pro Billiard Center Jakarta is hosting a fun-filled event with lessons, games, and prizes for the young ones. Let your kids experience the excitement of billiards in a fun and friendly environment."),
("Billiard Pro Player Meet & Greet", "2025-05-10", "Meet professional billiard players in person at Pro Billiard Center Jakarta. Get tips on improving your game, take photos, and even challenge them to a friendly match. A fantastic opportunity to learn from the best in the industry!"),
("Billiard Coaching Workshop", "2025-05-20", "Sign up for an intensive billiard coaching workshop led by experienced pros. This event is ideal for players who want to take their game to the next level. Improve your technique, learn new strategies, and get personalized feedback from top players."),
("Pro Billiard Center Annual Tournament", "2025-06-05", "The biggest tournament of the year! Compete in the Pro Billiard Center Annual Tournament for a chance to win amazing prizes and prestige. Players of all skill levels are welcome. Prepare for intense matches, great competition, and unforgettable moments!"),
("Charity Billiard Tournament", "2025-06-15", "Join us for a charity billiard tournament at Pro Billiard Center Jakarta. Compete for a good cause while enjoying the game we all love. All proceeds will go to supporting local community projects. Your participation will help make a difference!"),
("Weekend Billiard League", "2025-06-20", "Join our Weekend Billiard League and compete in a series of matches every weekend. Whether you're in it for the fun or the competition, it's a great way to play regularly, improve your skills, and connect with other billiard enthusiasts."),
("Billiard Tournament for Beginners", "2025-07-05", "Are you new to billiards? Join our tournament designed specifically for beginners! This is a great opportunity to showcase your skills, learn from others, and meet new friends. Don't worry if you're just starting out – this tournament is all about having fun and improving together!"),
("Billiard Exhibition Match", "2025-07-10", "Watch top professional players compete in an exhibition match at Pro Billiard Center Jakarta. This is your chance to witness high-level gameplay up close and personal, while learning from some of the best players in the world."),
("Billiard Player's Workshop", "2025-07-20", "Take part in a hands-on billiard workshop where you'll learn tips and techniques from professional players. This workshop will help you refine your skills and learn strategies that will give you an edge in your next game."),
("Billiard & BBQ Night", "2025-08-01", "Enjoy a night of billiards and BBQ at Pro Billiard Center Jakarta. Play your favorite games while indulging in delicious BBQ food and drinks. It's a perfect way to spend an evening with friends, family, and fellow billiard lovers."),
("Billiard Team Challenge", "2025-08-15", "Gather your team and compete in the Billiard Team Challenge! Form a team of 3 or more players and battle it out in this fun and competitive event. Great prizes await the winning team, so don't miss this chance to prove your team's skills!"),
("Pro Billiard Center Anniversary Celebration", "2025-09-10", "Celebrate the anniversary of Pro Billiard Center Jakarta with us! Expect fun games, great prizes, live performances, and special surprises. It’s going to be a day filled with laughter, excitement, and great memories. Join us in marking this special milestone!"),
("Billiard Masters Invitational", "2025-09-25", "The Billiard Masters Invitational is an exclusive event where the top players in the region come together to compete for the ultimate prize. Witness incredible shots, intense matches, and the pinnacle of billiard competition."),
("Billiard Beginners' Meetup", "2025-10-05", "New to billiards? Join our Beginners' Meetup! Meet other newcomers to the game, ask questions, get advice, and practice your shots in a relaxed and friendly environment. It's the perfect way to get started and meet fellow billiard fans!"),
("Billiard Poker Night", "2025-10-20", "Experience the thrill of combining billiards with poker! Join us for a fun night of billiard-themed poker games and challenges. It’s a night of strategy, fun, and friendly competition, so don’t miss out on this unique event.");

-- VENUES
INSERT INTO venue (name, address, opening_time, closing_time) VALUES
('MNC Center', 'Jl. Kebon Sirih No.17, Jakarta', '08:00:00', '22:00:00'),
('MNC Studios', 'Jl. Raya Perjuangan No.1, Jakarta', '09:00:00', '23:00:00'),
('Lido Lake Resort', 'Lido, Sukabumi, West Java', '07:00:00', '21:00:00'),
('Senayan City', 'Jl. Asia Afrika, Jakarta', '10:00:00', '22:00:00'),
('Grand Indonesia', 'Jl. MH Thamrin No.1, Jakarta', '09:00:00', '22:00:00'),
('Pacific Place', 'Jl. Jenderal Sudirman, Jakarta', '10:00:00', '22:00:00'),
('Plaza Indonesia', 'Jl. MH Thamrin No.28-30, Jakarta', '10:00:00', '22:00:00'),
('Summarecon Mall', 'Jl. Boulevard Raya, Bekasi', '10:00:00', '22:00:00'),
('Trans Studio Bandung', 'Jl. Gatot Subroto No.289, Bandung', '09:00:00', '21:00:00'),
('The Breeze BSD', 'Jl. BSD Grand Boulevard, Tangerang', '10:00:00', '23:00:00');

INSERT INTO memberships (name, price, description) VALUES
('Silver', 500000, 'Standard membership with basic benefits.'),
('Gold', 1000000, 'Premium membership with exclusive benefits and discounts.'),
('Platinum', 1500000, 'VIP membership with premium benefits, exclusive access, and discounts.');