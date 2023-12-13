interface computer {
  gpu: string,
  cpu: string,
  ram: string,
  quantityRam: number,
  windowsVersion: number
}

type ComputerGpu = Pick<computer, 'gpu'>

const gpu: ComputerGpu = {
  gpu: 'Rtx 3080'
} 