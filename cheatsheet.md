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

<!-- AWS example -->

- `aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 828023602172.dkr.ecr.eu-central-1.amazonaws.com`
- `docker build -t reservations -f ./Dockerfile ../../`
- `docker tag reservations:latest 828023602172.dkr.ecr.eu-central-1.amazonaws.com/reservations:latest`
- `docker push 828023602172.dkr.ecr.eu-central-1.amazonaws.com/reservations:latest`

- `eksctl get clusters`
- `eksctl create cluster -f ./cluster.yaml`

- `kubectl get nodes`
- `eksctl get nodegroups --cluster moonbnb`

- `kubectl config use-context docker-desktop`
- `kubectl get secrets`
- `kubectl get secrets -o yaml > secret.yaml`
- `kubectl config get-contexts`
- `kubectl config use-context ${AWS_EKS_CONTEXT_NAME}`
- `kubectl create -f ./secret.yaml`

- `helm install moonbnb .` / `helm upgrade moonbnb .`
- `kubectl get pods`

- `eksctl get nodegroups --cluster moonbnb`
- `eksctl scale nodegroup ng-1`

- `eksctl utils associate-iam-oidc-provider --region eu-west-1 --cluster moonbnb --approve`
- `curl -o iam-policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.6.1/docs/install/iam_policy.json`

- `eksctl create iamserviceaccount --cluster=<cluster-name> --namespace=kube-system --name=aws-load-balancer-controller --attach-policy-arn=arn:aws:iam::<AWS_ACCOUNT_ID>:policy/AWSLoadBalancerControllerIAMPolicy --override-existing-serviceaccounts --region <region-code> --approve`

- `helm repo add eks https://aws.github.io/eks-charts`
- `wget https://raw.githubusercontent.com/aws/eks-charts/master/stable/aws-load-balancer-controller/crds/crds.yaml`
- `kubectl apply -f crds.yaml`

- `helm install aws-load-balancer-controller eks/aws-load-balancer-controller -n kube-system --set clusterName=<cluster-name> --set serviceAccount.create=false --set serviceAccount.name=aws-load-balancer-controller`

- `kubectl get pods -n kube-system`

- `helm upgrade moonbnb .`
- `kubectl get ing`
