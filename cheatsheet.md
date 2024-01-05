<!-- DOCKER -->

- `docker build ../../ -f Dockerfile -t moonbnb_reservations`
- `docker-compose up`
- `docker-compose down`
- `docker run moonbnb_reservations`

- `docker build -t reservations -f ./Dockerfile ../../`
- `docker tag reservations ${gcloud_repo_url}/production`
- `docker image push ${gcloud_repo_url}/production`

- `docker-compose up --build`

- `kubectl get namespaces`
- `kubectl get pods`

- `helm create moonbnb`

- `kubectl create deployment reservations --image=${gcloud_repo_url}/production --dry-run=client -o yaml > deployment.yaml`

- `helm install moonbnb .`

- `kubectl get pods`
- `kubectl describe pods reservations-6587ccd6b8-9j7rv`

- `kubectl create secret docker-registry gcr-json-key --docker-server=${repository_domain} --docker-username=_json_key --docker-password="$(cat ${path_to_json_key_file})" --docker-email=${email}`

- `kubectl patch serviceaccount default -p '{"imagePullSecrets": [{"name": "gcr-json-key"}]}'`

- `kubectl rollout restart deployment reservations`

- `kubectl get pods`
- `kubectl delete pod ${POD_NAME}`
- `kubectl logs ${POD_NAME}`

- `helm upgrade moonbnb .`

- `kubectl create secret generic mongodb --from-literal=connectionString=${MONGO_CONNECTION_STRING}`
- `kubectl get secrets`
- `kubectl get secret mongodb -o yaml`

- `kubectl describe pod ${POD_NAME}`

- `kubectl create service clusterip notifications --tcp=3000 --dry-run=client -o yaml > service.yaml`
- `kubectl get svc`

<!-- Refreshing Google OAUth tokens for testing (OAuth Playground) -->

- `echo -n "${NEW_REFRESH_TOKEN}" | base64`
- `kubectl edit secret google` (replace the value)
- `kubectl rollout restart deployment notifications`

`gcloud container clusters get-credentials ${PROJECT_NAME} --region europe-west1 --project ${PROJECT_NAME}`

- `kubectl get pods -n kube-system`
- `helm install moonbnb .`
- `kubectl get pods`

- `kubectl config get-contexts`
- `kubectl config use-context ${LOCAL_CONTEXT_NAME}`
- `kubectl get secrets`

- `kubectl get secret stripe -o yaml > stripe.yaml`

<!-- swith context to GOOGLE CLOUD -->

- `kubect create -f stripe.yaml`

- `kubectl get ing`
