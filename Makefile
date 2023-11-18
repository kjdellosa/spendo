dev:
	docker-compose -f docker-compose.dev.yml up

dev-rebuild:
	docker-compose -f docker-compose.dev.yml up --build

clean:
	docker-compose -f docker-compose.dev.yml down

build:
	docker build -t kjdellosa/spendo:latest .

prod:
	docker-compose up

prod-clean:
	docker-compose down
