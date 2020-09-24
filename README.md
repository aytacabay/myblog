# Servisler
service create --network server-side --network client-side -p 8558:8558 --replicas 2 --name server-side aytacabay/server-side
docker service create --network server-side --name admin-side -p 9000:9000 --replicas 1 aytacabay/admin-side
docker service create --network client-side --name client-side -p 3000:3000 --replicas 2 aytacabay/client-side

# Notlar
docker swarm mi ayaga kaldir ilk olarak. 
mongodb yi ayaga kaldir ve sonra users, password ve port belirtmeyi unutma
Eger tekbir node uzerinden 3 unude ayaga kaldiricaksan network lerini baglamayi unutma.
Sonra fetch icerisindeki ip adres lerini de ayarlamayi unutma.
